import { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';

type ServiceStatus = 'running' | 'degraded' | 'recovering';

export default function DevOpsMode() {
  const [serviceStatus, setServiceStatus] = useState<ServiceStatus>('running');
  const [uptime, setUptime] = useState('99.98%');
  const [logs, setLogs] = useState<string[]>([
    '[INFO] Service health check passed',
    '[INFO] All systems operational'
  ]);

  useEffect(() => {
    if (serviceStatus === 'recovering') {
      const timer = setTimeout(() => {
        setServiceStatus('running');
        setUptime('99.98%');
        setLogs(prev => [
          ...prev,
          '[INFO] Recovery complete',
          '[INFO] Service stabilized',
          '[INFO] Health checks passing'
        ]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [serviceStatus]);

  const handleInjectFailure = () => {
    setServiceStatus('degraded');
    setUptime('94.12%');
    setLogs(prev => [
      ...prev,
      '[ERROR] Failure injected: container crash',
      '[WARN] Service degraded',
      '[INFO] Initiating auto-recovery...'
    ]);

    setTimeout(() => {
      setServiceStatus('recovering');
      setLogs(prev => [
        ...prev,
        '[INFO] Container restart initiated',
        '[INFO] Health checks starting...'
      ]);
    }, 1500);
  };

  const handleViewMetrics = () => {
    setLogs(prev => [
      ...prev,
      '[METRICS] MTTR: 2.3s',
      '[METRICS] Success rate: 99.98%',
      '[METRICS] Avg response time: 45ms',
      '[METRICS] Active connections: 1,247'
    ]);
  };

  const getStatusColor = () => {
    switch (serviceStatus) {
      case 'running':
        return '#22c55e';
      case 'degraded':
        return '#ef4444';
      case 'recovering':
        return '#f59e0b';
    }
  };

  const getStatusIcon = () => {
    switch (serviceStatus) {
      case 'running':
        return <CheckCircle className="w-5 h-5" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5" />;
      case 'recovering':
        return <Activity className="w-5 h-5 animate-pulse" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">CI/CD Pipeline</h2>
          <div className="flex items-center gap-4 font-mono text-sm">
            {['Code', 'Build', 'Test', 'Image', 'Deploy'].map((step, idx) => (
              <div key={step} className="flex items-center">
                <div className="px-4 py-2 bg-[#121826] border border-[#22c55e] rounded text-[#22c55e]">
                  {step}
                </div>
                {idx < 4 && (
                  <div className="w-8 h-0.5 bg-[#22c55e]"></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-4 font-mono text-sm">Automated release flow</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Services Panel</h2>

          <div className="bg-[#121826] border border-[#1f2937] rounded-lg p-6 font-mono">
            <div className="grid grid-cols-3 gap-8 mb-6">
              <div>
                <div className="text-gray-400 text-sm mb-2">SERVICE</div>
                <div className="text-white text-lg">faultline</div>
              </div>

              <div>
                <div className="text-gray-400 text-sm mb-2">STATUS</div>
                <div className="flex items-center gap-2" style={{ color: getStatusColor() }}>
                  {getStatusIcon()}
                  <span className="text-lg capitalize">{serviceStatus}</span>
                </div>
              </div>

              <div>
                <div className="text-gray-400 text-sm mb-2">UPTIME</div>
                <div className="text-white text-lg">{uptime}</div>
              </div>
            </div>

            <div className="border-t border-[#1f2937] pt-6">
              <div className="text-gray-400 text-sm mb-2">LOGS</div>
              <div className="bg-[#0b0f14] rounded p-4 h-48 overflow-y-auto">
                {logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`text-sm font-mono mb-1 ${
                      log.includes('ERROR')
                        ? 'text-[#ef4444]'
                        : log.includes('WARN')
                        ? 'text-[#f59e0b]'
                        : log.includes('METRICS')
                        ? 'text-[#38bdf8]'
                        : 'text-gray-300'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Commands</h2>
          <div className="flex gap-4">
            <button
              onClick={handleInjectFailure}
              disabled={serviceStatus !== 'running'}
              className="px-6 py-3 bg-[#ef4444] hover:bg-[#dc2626] disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-mono rounded transition-colors"
            >
              inject failure
            </button>
            <button
              onClick={handleViewMetrics}
              className="px-6 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-mono rounded transition-colors"
            >
              view metrics
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
